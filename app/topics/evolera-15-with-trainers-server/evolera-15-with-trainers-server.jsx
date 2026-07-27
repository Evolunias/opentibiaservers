import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-with-trainers-server');
}

export default function Evolera15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-with-trainers-server" />;
}
