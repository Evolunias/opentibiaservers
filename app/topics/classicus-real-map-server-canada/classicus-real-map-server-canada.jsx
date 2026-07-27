import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-canada');
}

export default function ClassicusRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-canada" />;
}
