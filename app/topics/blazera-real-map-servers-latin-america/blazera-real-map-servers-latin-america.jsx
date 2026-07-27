import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-latin-america');
}

export default function BlazeraRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-latin-america" />;
}
