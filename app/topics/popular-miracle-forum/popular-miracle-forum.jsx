import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-forum');
}

export default function PopularMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-forum" />;
}
