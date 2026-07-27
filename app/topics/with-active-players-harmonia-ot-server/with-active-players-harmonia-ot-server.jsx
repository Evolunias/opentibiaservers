import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-harmonia-ot-server');
}

export default function WithActivePlayersHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-harmonia-ot-server" />;
}
