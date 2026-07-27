import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-active-players-server-usa');
}

export default function MediviaWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-active-players-server-usa" />;
}
