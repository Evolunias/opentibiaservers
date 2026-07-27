import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-online');
}

export default function TopImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-online" />;
}
