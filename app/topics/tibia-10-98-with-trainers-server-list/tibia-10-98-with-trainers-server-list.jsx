import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-trainers-server-list');
}

export default function Tibia1098WithTrainersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-trainers-server-list" />;
}
