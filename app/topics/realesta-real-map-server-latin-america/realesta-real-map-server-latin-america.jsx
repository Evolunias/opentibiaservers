import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-server-latin-america');
}

export default function RealestaRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-server-latin-america" />;
}
