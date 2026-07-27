import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-trainers-server-list');
}

export default function Tibia12WithTrainersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-trainers-server-list" />;
}
