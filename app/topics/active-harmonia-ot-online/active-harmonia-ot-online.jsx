import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-online');
}

export default function ActiveHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-online" />;
}
