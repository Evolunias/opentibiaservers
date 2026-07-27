import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-trainers-forum');
}

export default function Tibia74WithTrainersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-trainers-forum" />;
}
