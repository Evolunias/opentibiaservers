import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-forum');
}

export default function TopEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-forum" />;
}
