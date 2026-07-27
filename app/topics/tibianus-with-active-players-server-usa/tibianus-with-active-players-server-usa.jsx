import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-usa');
}

export default function TibianusWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-usa" />;
}
