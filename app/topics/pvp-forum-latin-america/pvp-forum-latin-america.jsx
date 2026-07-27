import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-latin-america');
}

export default function PvpForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-latin-america" />;
}
