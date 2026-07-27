import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-brazil');
}

export default function HighExpPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-brazil" />;
}
