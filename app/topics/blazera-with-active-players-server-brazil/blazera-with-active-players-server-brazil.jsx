import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-active-players-server-brazil');
}

export default function BlazeraWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-active-players-server-brazil" />;
}
