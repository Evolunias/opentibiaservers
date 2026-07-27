import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-online');
}

export default function NoResetHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-online" />;
}
