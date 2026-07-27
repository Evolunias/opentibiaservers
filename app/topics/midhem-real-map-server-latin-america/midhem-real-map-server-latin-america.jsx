import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-latin-america');
}

export default function MidhemRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-latin-america" />;
}
