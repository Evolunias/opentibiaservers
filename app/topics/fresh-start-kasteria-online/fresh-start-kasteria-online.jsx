import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-online');
}

export default function FreshStartKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-online" />;
}
