import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-active-players-server-germany');
}

export default function SabrehavenWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-active-players-server-germany" />;
}
