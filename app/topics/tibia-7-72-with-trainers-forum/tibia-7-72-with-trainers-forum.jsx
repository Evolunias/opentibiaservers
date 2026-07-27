import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-trainers-forum');
}

export default function Tibia772WithTrainersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-trainers-forum" />;
}
