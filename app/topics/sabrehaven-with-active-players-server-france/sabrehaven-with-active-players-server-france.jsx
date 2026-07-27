import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-active-players-server-france');
}

export default function SabrehavenWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-active-players-server-france" />;
}
