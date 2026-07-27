import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-active-players-server-brazil');
}

export default function MediviaWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-active-players-server-brazil" />;
}
