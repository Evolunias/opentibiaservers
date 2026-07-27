import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-with-trainers-server');
}

export default function Tibiame96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-with-trainers-server" />;
}
