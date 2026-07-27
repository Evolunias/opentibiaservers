import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-sweden');
}

export default function PvpEnforcedForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-sweden" />;
}
