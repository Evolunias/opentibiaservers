import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-forum');
}

export default function OfficialEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-forum" />;
}
