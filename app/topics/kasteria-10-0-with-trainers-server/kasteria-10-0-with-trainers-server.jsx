import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-with-trainers-server');
}

export default function Kasteria100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-with-trainers-server" />;
}
