import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-online');
}

export default function TopRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-online" />;
}
