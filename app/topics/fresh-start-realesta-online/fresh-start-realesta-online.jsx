import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-online');
}

export default function FreshStartRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-online" />;
}
