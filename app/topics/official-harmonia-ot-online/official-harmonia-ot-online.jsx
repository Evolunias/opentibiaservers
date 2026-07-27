import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-online');
}

export default function OfficialHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-online" />;
}
