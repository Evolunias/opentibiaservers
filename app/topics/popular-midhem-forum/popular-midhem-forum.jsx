import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-forum');
}

export default function PopularMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-forum" />;
}
