import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-server-list');
}

export default function Tibia11WithTrainersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-server-list" />;
}
