import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-servers-north-america');
}

export default function LumineraRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-servers-north-america" />;
}
