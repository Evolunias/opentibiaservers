import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-online');
}

export default function PopularRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-online" />;
}
