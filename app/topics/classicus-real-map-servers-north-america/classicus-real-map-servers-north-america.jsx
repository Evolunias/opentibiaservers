import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-north-america');
}

export default function ClassicusRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-north-america" />;
}
