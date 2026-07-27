import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-online');
}

export default function FreshStartNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-online" />;
}
