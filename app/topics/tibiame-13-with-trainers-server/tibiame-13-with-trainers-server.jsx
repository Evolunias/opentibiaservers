import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-with-trainers-server');
}

export default function Tibiame13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-with-trainers-server" />;
}
