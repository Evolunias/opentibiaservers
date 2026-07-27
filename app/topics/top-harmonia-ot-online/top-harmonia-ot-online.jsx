import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-online');
}

export default function TopHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-online" />;
}
