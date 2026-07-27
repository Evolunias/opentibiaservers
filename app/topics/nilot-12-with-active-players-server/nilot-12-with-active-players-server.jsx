import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-with-active-players-server');
}

export default function Nilot12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-with-active-players-server" />;
}
