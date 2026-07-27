import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-active-players-server-poland');
}

export default function AureraGlobalWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-active-players-server-poland" />;
}
