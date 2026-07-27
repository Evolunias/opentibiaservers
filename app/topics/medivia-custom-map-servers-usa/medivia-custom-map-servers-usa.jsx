import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-usa');
}

export default function MediviaCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-usa" />;
}
