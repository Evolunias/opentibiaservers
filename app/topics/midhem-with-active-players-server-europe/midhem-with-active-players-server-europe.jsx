import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-active-players-server-europe');
}

export default function MidhemWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-active-players-server-europe" />;
}
