import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-players-online-south-america');
}

export default function RetroPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-players-online-south-america" />;
}
