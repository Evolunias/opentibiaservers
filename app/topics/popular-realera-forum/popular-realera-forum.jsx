import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-forum');
}

export default function PopularRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-forum" />;
}
