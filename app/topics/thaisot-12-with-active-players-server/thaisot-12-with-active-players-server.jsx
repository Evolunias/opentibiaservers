import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-with-active-players-server');
}

export default function Thaisot12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-with-active-players-server" />;
}
