import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-online');
}

export default function PopularMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-online" />;
}
