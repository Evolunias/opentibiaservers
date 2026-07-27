import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-trainers-forum');
}

export default function Tibia71WithTrainersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-trainers-forum" />;
}
