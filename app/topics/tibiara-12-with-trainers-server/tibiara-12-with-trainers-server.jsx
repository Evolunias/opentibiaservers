import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-with-trainers-server');
}

export default function Tibiara12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-with-trainers-server" />;
}
