import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-online');
}

export default function FreshStartHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-online" />;
}
