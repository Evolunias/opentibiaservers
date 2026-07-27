import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-with-trainers-server');
}

export default function Tibiara96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-with-trainers-server" />;
}
