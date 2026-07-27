import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-trainers-forum');
}

export default function Tibia854WithTrainersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-trainers-forum" />;
}
