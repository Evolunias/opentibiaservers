import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-online');
}

export default function FreshStartCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-online" />;
}
