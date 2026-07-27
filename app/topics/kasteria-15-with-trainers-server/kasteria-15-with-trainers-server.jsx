import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-with-trainers-server');
}

export default function Kasteria15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-with-trainers-server" />;
}
