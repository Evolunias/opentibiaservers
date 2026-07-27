import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-usa');
}

export default function PvpEnforcedForumUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-usa" />;
}
