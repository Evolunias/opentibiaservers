import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-with-trainers-server');
}

export default function Kasteria13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-with-trainers-server" />;
}
