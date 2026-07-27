import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-online');
}

export default function LowrateThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-online" />;
}
