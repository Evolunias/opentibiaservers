import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-online');
}

export default function HarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-online" />;
}
