import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-online');
}

export default function FreshStartInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-online" />;
}
