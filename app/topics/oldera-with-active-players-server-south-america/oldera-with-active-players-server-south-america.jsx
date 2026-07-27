import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-south-america');
}

export default function OlderaWithActivePlayersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-south-america" />;
}
