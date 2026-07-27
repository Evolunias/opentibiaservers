import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-online');
}

export default function BestCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-online" />;
}
