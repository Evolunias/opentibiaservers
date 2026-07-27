import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-trainers-server-list');
}

export default function Tibia772WithTrainersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-trainers-server-list" />;
}
