import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ot-server-north-america');
}

export default function WithActivePlayersOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ot-server-north-america" />;
}
