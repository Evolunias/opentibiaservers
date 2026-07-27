import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-active-players-server-sweden');
}

export default function SabrehavenWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-active-players-server-sweden" />;
}
