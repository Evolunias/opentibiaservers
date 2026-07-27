import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-online');
}

export default function CurrentKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-online" />;
}
