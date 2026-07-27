import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-sweden');
}

export default function LowExpPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-sweden" />;
}
