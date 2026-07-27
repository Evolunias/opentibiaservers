import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-online');
}

export default function TopCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-online" />;
}
