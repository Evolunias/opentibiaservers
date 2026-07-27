import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-forum');
}

export default function FreshStartEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-forum" />;
}
