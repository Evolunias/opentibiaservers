import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-with-trainers-server');
}

export default function Tibiame81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-with-trainers-server" />;
}
