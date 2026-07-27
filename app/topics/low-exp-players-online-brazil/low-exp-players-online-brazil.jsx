import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-brazil');
}

export default function LowExpPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-brazil" />;
}
