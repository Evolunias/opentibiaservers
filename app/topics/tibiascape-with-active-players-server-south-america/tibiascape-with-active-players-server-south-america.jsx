import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-active-players-server-south-america');
}

export default function TibiascapeWithActivePlayersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-active-players-server-south-america" />;
}
