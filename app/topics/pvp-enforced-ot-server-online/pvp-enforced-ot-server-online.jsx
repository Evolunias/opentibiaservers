import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-online');
}

export default function PvpEnforcedOtServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-online" />;
}
