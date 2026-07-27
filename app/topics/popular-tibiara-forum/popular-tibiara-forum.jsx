import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-forum');
}

export default function PopularTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-forum" />;
}
