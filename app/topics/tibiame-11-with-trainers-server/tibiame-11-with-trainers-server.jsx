import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-with-trainers-server');
}

export default function Tibiame11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-with-trainers-server" />;
}
