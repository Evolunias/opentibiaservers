import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-north-america');
}

export default function PvpForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-north-america" />;
}
