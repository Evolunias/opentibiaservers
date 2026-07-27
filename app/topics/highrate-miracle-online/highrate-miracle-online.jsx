import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-online');
}

export default function HighrateMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-online" />;
}
