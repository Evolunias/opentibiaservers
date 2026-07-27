import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-with-active-players-server');
}

export default function DuraOnline15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-with-active-players-server" />;
}
