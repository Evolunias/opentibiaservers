import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-online');
}

export default function CustomCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-online" />;
}
