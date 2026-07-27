import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-online');
}

export default function NoResetInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-online" />;
}
