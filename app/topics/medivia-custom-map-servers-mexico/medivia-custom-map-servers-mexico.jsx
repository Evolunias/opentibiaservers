import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-mexico');
}

export default function MediviaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-mexico" />;
}
