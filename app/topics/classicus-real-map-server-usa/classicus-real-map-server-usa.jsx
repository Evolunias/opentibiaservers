import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-usa');
}

export default function ClassicusRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-usa" />;
}
