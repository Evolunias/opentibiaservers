import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-with-trainers-server');
}

export default function Tibiara15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-with-trainers-server" />;
}
