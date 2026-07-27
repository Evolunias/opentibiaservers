import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-active-players-server-argentina');
}

export default function BlazeraWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-active-players-server-argentina" />;
}
