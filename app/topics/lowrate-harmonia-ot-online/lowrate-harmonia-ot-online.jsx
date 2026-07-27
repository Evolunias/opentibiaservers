import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-online');
}

export default function LowrateHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-online" />;
}
