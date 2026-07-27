import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-sweden');
}

export default function RetroPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-sweden" />;
}
