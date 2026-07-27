import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-forum');
}

export default function BestCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-forum" />;
}
