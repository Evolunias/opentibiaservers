import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-with-active-players-server');
}

export default function DuraOnline12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-with-active-players-server" />;
}
