import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-uk');
}

export default function PvpEnforcedForumUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-uk" />;
}
