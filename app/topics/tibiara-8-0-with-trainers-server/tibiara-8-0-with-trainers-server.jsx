import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-0-with-trainers-server');
}

export default function Tibiara80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-0-with-trainers-server" />;
}
