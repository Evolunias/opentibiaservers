import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-online');
}

export default function CalmeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="calmera-online" />;
}
