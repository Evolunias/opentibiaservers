import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-1-with-trainers-server');
}

export default function Tibiara71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-1-with-trainers-server" />;
}
