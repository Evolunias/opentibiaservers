import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-usa');
}

export default function LumineraCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-usa" />;
}
