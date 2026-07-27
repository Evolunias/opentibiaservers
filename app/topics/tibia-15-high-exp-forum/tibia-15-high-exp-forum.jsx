import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-forum');
}

export default function Tibia15HighExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-forum" />;
}
