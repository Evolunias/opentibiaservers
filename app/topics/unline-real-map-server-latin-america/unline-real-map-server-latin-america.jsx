import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-latin-america');
}

export default function UnlineRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-latin-america" />;
}
