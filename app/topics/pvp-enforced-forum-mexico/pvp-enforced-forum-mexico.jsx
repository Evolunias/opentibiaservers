import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-mexico');
}

export default function PvpEnforcedForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-mexico" />;
}
