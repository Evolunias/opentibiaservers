import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-forum');
}

export default function TopCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-forum" />;
}
