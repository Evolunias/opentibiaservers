import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-online');
}

export default function FreshStartAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-online" />;
}
