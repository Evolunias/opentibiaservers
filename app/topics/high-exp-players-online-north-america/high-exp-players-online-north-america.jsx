import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-north-america');
}

export default function HighExpPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-north-america" />;
}
