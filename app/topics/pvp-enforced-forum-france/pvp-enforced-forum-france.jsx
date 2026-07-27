import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-forum-france');
}

export default function PvpEnforcedForumFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-forum-france" />;
}
