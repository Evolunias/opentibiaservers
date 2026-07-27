import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-france');
}

export default function ImperianicRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-france" />;
}
