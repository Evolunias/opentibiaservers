import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-active-players-server-argentina');
}

export default function AlasteraWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-active-players-server-argentina" />;
}
