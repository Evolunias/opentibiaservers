import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-online');
}

export default function ActiveKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-online" />;
}
