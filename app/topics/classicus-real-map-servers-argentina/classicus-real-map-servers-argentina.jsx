import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-argentina');
}

export default function ClassicusRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-argentina" />;
}
