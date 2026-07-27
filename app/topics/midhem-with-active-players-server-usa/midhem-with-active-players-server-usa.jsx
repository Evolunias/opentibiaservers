import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-active-players-server-usa');
}

export default function MidhemWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-active-players-server-usa" />;
}
