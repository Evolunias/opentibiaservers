import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-with-trainers-server');
}

export default function Tibiame80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-with-trainers-server" />;
}
