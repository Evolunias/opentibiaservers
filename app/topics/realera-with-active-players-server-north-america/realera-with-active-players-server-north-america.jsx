import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-active-players-server-north-america');
}

export default function RealeraWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-active-players-server-north-america" />;
}
