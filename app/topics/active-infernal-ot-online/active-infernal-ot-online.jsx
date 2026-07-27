import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-online');
}

export default function ActiveInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-online" />;
}
