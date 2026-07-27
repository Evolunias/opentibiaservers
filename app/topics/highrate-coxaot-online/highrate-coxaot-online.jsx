import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-online');
}

export default function HighrateCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-online" />;
}
