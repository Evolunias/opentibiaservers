import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-latin-america');
}

export default function MidhemRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-latin-america" />;
}
