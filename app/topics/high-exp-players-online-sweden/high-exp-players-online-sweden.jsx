import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-sweden');
}

export default function HighExpPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-sweden" />;
}
