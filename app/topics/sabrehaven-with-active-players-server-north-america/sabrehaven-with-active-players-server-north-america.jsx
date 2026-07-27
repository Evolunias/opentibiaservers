import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-active-players-server-north-america');
}

export default function SabrehavenWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-active-players-server-north-america" />;
}
