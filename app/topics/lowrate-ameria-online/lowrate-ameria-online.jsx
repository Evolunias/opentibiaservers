import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-online');
}

export default function LowrateAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-online" />;
}
