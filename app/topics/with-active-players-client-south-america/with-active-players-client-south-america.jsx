import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-south-america');
}

export default function WithActivePlayersClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-south-america" />;
}
