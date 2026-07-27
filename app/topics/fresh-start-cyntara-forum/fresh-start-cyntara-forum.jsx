import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-forum');
}

export default function FreshStartCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-forum" />;
}
