import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-online');
}

export default function LowrateImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-online" />;
}
