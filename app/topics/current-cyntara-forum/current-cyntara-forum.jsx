import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-forum');
}

export default function CurrentCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-forum" />;
}
