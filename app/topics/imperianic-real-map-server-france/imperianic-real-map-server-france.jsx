import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-server-france');
}

export default function ImperianicRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-server-france" />;
}
