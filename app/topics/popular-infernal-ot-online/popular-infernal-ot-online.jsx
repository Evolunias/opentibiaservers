import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-online');
}

export default function PopularInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-online" />;
}
