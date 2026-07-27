import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-online');
}

export default function LowrateAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-online" />;
}
