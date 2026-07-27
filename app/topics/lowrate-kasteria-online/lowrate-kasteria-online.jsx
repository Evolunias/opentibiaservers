import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-online');
}

export default function LowrateKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-online" />;
}
