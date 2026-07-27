import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-online');
}

export default function CurrentCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-online" />;
}
