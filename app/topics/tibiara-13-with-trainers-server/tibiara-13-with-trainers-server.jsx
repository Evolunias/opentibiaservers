import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-with-trainers-server');
}

export default function Tibiara13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-with-trainers-server" />;
}
