import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-usa');
}

export default function ClassicusRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-usa" />;
}
