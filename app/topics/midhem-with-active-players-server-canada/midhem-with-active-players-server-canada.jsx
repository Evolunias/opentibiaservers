import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-active-players-server-canada');
}

export default function MidhemWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-active-players-server-canada" />;
}
