import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-online');
}

export default function OfficialInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-online" />;
}
