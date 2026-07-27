import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-forum');
}

export default function PvpEnforcedOtServerForumKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-forum" />;
}
