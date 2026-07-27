import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-forum');
}

export default function PopularBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-forum" />;
}
