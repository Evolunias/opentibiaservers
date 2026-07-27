import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-online');
}

export default function ActiveCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-online" />;
}
