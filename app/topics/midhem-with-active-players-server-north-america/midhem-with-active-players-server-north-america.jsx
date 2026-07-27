import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-active-players-server-north-america');
}

export default function MidhemWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-active-players-server-north-america" />;
}
