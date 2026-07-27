import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-active-players-server-poland');
}

export default function MidhemWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-active-players-server-poland" />;
}
