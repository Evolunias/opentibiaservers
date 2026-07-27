import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-high-exp-forum');
}

export default function Tibia96HighExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-high-exp-forum" />;
}
