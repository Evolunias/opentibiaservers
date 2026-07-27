import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-argentina');
}

export default function BlazeraCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-argentina" />;
}
