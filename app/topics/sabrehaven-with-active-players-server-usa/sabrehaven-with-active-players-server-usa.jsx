import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-active-players-server-usa');
}

export default function SabrehavenWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-active-players-server-usa" />;
}
