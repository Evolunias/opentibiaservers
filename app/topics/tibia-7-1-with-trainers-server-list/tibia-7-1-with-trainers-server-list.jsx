import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-trainers-server-list');
}

export default function Tibia71WithTrainersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-trainers-server-list" />;
}
