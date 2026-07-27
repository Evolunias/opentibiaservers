import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-servers-latin-america');
}

export default function LumineraRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-servers-latin-america" />;
}
