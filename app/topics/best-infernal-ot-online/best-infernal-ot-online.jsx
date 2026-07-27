import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-online');
}

export default function BestInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-online" />;
}
