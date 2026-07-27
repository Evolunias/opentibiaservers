import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-forum');
}

export default function CurrentEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-forum" />;
}
