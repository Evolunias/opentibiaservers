import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-active-players-server-south-america');
}

export default function ThaisotWithActivePlayersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-active-players-server-south-america" />;
}
