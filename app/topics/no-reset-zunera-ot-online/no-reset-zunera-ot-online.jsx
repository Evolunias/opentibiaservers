import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-online');
}

export default function NoResetZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-online" />;
}
