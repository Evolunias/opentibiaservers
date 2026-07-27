import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-online');
}

export default function CurrentAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-online" />;
}
