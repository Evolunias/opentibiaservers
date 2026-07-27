import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-6-with-trainers-server');
}

export default function Tibiame86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-6-with-trainers-server" />;
}
