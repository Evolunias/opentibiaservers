import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-with-trainers-server');
}

export default function Tibiara84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-with-trainers-server" />;
}
