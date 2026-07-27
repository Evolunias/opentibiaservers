import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-online');
}

export default function BestAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-online" />;
}
