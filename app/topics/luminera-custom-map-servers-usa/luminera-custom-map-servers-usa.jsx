import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-usa');
}

export default function LumineraCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-usa" />;
}
