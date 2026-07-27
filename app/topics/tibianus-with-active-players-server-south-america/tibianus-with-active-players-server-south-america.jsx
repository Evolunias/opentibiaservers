import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-south-america');
}

export default function TibianusWithActivePlayersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-south-america" />;
}
