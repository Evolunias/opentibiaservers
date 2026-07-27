import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-online');
}

export default function CustomKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-online" />;
}
