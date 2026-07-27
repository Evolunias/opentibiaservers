import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-with-trainers-server');
}

export default function Tibiara14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-with-trainers-server" />;
}
