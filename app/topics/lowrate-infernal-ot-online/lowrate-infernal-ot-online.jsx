import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-online');
}

export default function LowrateInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-online" />;
}
