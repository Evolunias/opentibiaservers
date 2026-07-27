import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-online');
}

export default function ThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="thaisot-online" />;
}
