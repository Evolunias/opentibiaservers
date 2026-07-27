import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-canada');
}

export default function MediviaRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-canada" />;
}
