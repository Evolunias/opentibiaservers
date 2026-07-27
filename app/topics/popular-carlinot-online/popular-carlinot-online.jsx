import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-online');
}

export default function PopularCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-online" />;
}
