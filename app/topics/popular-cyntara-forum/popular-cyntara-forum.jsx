import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-forum');
}

export default function PopularCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-forum" />;
}
