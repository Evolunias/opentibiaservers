import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-usa');
}

export default function BlazeraCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-usa" />;
}
