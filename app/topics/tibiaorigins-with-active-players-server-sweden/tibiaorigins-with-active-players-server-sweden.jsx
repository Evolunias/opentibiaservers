import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-active-players-server-sweden');
}

export default function TibiaoriginsWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-active-players-server-sweden" />;
}
