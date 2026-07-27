import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-forum');
}

export default function PopularEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-forum" />;
}
