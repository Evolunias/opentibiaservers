import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-online');
}

export default function NoResetCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-online" />;
}
