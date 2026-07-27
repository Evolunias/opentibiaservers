import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-forum');
}

export default function ActiveEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-forum" />;
}
