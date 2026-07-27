import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-argentina');
}

export default function TibianusWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-argentina" />;
}
