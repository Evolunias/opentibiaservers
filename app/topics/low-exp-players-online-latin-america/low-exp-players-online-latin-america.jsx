import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-latin-america');
}

export default function LowExpPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-latin-america" />;
}
