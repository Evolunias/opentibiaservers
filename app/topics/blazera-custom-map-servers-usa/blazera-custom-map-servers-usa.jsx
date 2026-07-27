import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-usa');
}

export default function BlazeraCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-usa" />;
}
