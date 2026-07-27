import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-with-trainers-server');
}

export default function Tibiame12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-with-trainers-server" />;
}
