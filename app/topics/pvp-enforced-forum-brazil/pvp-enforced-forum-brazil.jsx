import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-brazil');
}

export default function PvpEnforcedForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-brazil" />;
}
