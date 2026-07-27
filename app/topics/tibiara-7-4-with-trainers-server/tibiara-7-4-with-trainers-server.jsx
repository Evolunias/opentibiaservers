import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-with-trainers-server');
}

export default function Tibiara74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-with-trainers-server" />;
}
