import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-mexico');
}

export default function NonPvpForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-mexico" />;
}
