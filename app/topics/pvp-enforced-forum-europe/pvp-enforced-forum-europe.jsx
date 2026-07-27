import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-europe');
}

export default function PvpEnforcedForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-europe" />;
}
