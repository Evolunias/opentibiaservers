import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-trainers-forum');
}

export default function Tibia81WithTrainersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-trainers-forum" />;
}
