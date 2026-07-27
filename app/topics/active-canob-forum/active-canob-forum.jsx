import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-forum');
}

export default function ActiveCanobForumKeywordPage() {
  return <StaticKeywordPage slug="active-canob-forum" />;
}
