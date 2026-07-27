import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-online');
}

export default function LowrateMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-online" />;
}
