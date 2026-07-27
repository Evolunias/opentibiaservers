import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-south-america');
}

export default function SeasonalPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-south-america" />;
}
