import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-servers-france');
}

export default function NtoStarRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-servers-france" />;
}
