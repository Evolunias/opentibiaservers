import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-online');
}

export default function VenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="venoreot-online" />;
}
