import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-latin-america');
}

export default function ClassicusRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-latin-america" />;
}
