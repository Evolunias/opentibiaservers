import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-online');
}

export default function BestKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-online" />;
}
