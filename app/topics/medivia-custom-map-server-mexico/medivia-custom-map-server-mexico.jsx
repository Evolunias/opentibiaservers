import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-mexico');
}

export default function MediviaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-mexico" />;
}
