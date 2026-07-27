import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-active-players-server-canada');
}

export default function SabrehavenWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-active-players-server-canada" />;
}
