import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-mexico');
}

export default function BlazeraCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-mexico" />;
}
