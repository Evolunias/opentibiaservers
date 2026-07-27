import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-active-players-server-usa');
}

export default function AlasteraWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-active-players-server-usa" />;
}
