import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-online');
}

export default function TopMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-online" />;
}
