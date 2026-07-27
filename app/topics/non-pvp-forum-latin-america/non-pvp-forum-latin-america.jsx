import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-latin-america');
}

export default function NonPvpForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-latin-america" />;
}
