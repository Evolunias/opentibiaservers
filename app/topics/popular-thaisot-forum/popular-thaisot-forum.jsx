import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-forum');
}

export default function PopularThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-forum" />;
}
