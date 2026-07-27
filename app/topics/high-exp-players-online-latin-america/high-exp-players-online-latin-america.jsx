import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-latin-america');
}

export default function HighExpPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-latin-america" />;
}
