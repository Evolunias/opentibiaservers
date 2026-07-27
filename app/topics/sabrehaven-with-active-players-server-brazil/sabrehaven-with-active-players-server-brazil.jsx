import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-active-players-server-brazil');
}

export default function SabrehavenWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-active-players-server-brazil" />;
}
