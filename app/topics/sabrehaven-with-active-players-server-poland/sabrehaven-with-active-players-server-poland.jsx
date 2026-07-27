import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-active-players-server-poland');
}

export default function SabrehavenWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-active-players-server-poland" />;
}
