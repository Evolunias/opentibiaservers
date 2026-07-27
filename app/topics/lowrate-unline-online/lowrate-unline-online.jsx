import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-online');
}

export default function LowrateUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-online" />;
}
