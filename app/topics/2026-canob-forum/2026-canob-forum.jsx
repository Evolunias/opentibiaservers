import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-canob-forum');
}

export default function Keyword2026CanobForumKeywordPage() {
  return <StaticKeywordPage slug="2026-canob-forum" />;
}
