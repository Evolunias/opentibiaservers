import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-latin-america');
}

export default function ClassicusRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-latin-america" />;
}
