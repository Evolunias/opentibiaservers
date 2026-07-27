import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-trainers-forum');
}

export default function Tibia15WithTrainersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-trainers-forum" />;
}
