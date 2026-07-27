import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-online');
}

export default function CurrentInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-online" />;
}
