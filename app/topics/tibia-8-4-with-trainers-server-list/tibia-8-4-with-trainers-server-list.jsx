import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-trainers-server-list');
}

export default function Tibia84WithTrainersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-trainers-server-list" />;
}
