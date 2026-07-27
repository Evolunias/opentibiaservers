import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-with-trainers-server');
}

export default function Kasteria11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-with-trainers-server" />;
}
