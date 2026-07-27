import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-argentina');
}

export default function MediviaCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-argentina" />;
}
