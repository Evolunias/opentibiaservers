import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-latin-america');
}

export default function MediviaRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-latin-america" />;
}
