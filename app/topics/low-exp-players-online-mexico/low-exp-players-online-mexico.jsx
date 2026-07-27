import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-mexico');
}

export default function LowExpPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-mexico" />;
}
