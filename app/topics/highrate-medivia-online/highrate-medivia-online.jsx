import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-online');
}

export default function HighrateMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-online" />;
}
