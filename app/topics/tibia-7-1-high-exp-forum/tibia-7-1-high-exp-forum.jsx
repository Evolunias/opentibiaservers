import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-high-exp-forum');
}

export default function Tibia71HighExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-high-exp-forum" />;
}
