import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-north-america');
}

export default function ClassicusRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-north-america" />;
}
