import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-online');
}

export default function FreshStartImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-online" />;
}
