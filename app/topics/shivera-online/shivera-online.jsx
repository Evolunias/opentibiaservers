import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-online');
}

export default function ShiveraOnlineKeywordPage() {
  return <StaticKeywordPage slug="shivera-online" />;
}
