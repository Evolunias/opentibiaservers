import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-with-trainers-server');
}

export default function Tibiame100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-with-trainers-server" />;
}
