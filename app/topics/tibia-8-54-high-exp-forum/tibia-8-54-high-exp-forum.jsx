import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-high-exp-forum');
}

export default function Tibia854HighExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-high-exp-forum" />;
}
