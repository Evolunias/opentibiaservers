import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-with-trainers-server');
}

export default function Tibiame15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-with-trainers-server" />;
}
