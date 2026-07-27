import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-active-players-server-argentina');
}

export default function MediviaWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-active-players-server-argentina" />;
}
