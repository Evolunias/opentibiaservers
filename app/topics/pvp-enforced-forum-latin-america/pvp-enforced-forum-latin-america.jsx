import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-latin-america');
}

export default function PvpEnforcedForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-latin-america" />;
}
