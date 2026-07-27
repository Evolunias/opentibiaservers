import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-online');
}

export default function TopInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-online" />;
}
