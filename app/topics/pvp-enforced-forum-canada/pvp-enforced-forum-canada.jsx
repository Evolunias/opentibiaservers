import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-canada');
}

export default function PvpEnforcedForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-canada" />;
}
