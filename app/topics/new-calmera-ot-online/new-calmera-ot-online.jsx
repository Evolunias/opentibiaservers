import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-online');
}

export default function NewCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-online" />;
}
