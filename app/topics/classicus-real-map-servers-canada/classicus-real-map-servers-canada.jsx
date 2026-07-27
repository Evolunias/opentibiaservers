import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-canada');
}

export default function ClassicusRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-canada" />;
}
