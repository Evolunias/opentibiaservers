import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-forum');
}

export default function Tibia11HighExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-forum" />;
}
