import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-north-america');
}

export default function NonPvpForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-north-america" />;
}
