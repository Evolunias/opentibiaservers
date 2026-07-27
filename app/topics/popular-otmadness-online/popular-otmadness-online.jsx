import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-online');
}

export default function PopularOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-online" />;
}
