import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-online');
}

export default function PopularCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-online" />;
}
