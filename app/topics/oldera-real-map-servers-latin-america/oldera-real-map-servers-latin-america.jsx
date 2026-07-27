import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-latin-america');
}

export default function OlderaRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-latin-america" />;
}
