import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-online');
}

export default function CurrentImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-online" />;
}
