import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-online');
}

export default function CustomHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-online" />;
}
