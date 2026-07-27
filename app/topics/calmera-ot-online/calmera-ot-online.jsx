import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-online');
}

export default function CalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-online" />;
}
