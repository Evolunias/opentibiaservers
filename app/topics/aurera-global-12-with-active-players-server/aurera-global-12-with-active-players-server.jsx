import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-with-active-players-server');
}

export default function AureraGlobal12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-with-active-players-server" />;
}
