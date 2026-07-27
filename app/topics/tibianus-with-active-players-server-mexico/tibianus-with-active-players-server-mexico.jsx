import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-mexico');
}

export default function TibianusWithActivePlayersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-mexico" />;
}
