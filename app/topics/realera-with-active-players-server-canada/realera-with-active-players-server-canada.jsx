import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-active-players-server-canada');
}

export default function RealeraWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-active-players-server-canada" />;
}
