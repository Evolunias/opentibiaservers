import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-with-trainers-server');
}

export default function Tibiame14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-with-trainers-server" />;
}
