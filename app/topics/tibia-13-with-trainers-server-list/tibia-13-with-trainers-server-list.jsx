import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-trainers-server-list');
}

export default function Tibia13WithTrainersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-trainers-server-list" />;
}
