import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-forum');
}

export default function BestEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-forum" />;
}
