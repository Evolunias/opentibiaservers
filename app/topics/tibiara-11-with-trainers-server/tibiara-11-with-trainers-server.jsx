import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-with-trainers-server');
}

export default function Tibiara11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-with-trainers-server" />;
}
