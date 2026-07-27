import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-south-america');
}

export default function CarlinotRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-south-america" />;
}
