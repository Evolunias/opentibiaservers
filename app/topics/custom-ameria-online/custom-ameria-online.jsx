import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-online');
}

export default function CustomAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-online" />;
}
