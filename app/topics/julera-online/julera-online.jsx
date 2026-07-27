import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-online');
}

export default function JuleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="julera-online" />;
}
