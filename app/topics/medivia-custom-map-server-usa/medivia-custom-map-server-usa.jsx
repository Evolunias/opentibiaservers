import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-usa');
}

export default function MediviaCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-usa" />;
}
