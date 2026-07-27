import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-canada');
}

export default function TibianusWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-canada" />;
}
