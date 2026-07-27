import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-online');
}

export default function LowrateAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-online" />;
}
