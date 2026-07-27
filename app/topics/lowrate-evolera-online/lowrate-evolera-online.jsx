import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-online');
}

export default function LowrateEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-online" />;
}
