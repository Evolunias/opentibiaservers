import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-with-active-players-server');
}

export default function Unline12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-with-active-players-server" />;
}
