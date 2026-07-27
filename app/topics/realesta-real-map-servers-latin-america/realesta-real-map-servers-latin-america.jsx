import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-latin-america');
}

export default function RealestaRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-latin-america" />;
}
