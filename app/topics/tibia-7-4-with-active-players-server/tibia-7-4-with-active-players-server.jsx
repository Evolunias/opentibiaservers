import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-active-players-server');
}

export default function Tibia74WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-active-players-server" />;
}
