import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-online');
}

export default function LowrateCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-online" />;
}
