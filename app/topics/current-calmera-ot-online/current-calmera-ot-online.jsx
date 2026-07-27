import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-online');
}

export default function CurrentCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-online" />;
}
