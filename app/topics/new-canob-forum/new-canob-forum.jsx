import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-forum');
}

export default function NewCanobForumKeywordPage() {
  return <StaticKeywordPage slug="new-canob-forum" />;
}
