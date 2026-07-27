import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ot-server-south-america');
}

export default function WithActivePlayersOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ot-server-south-america" />;
}
