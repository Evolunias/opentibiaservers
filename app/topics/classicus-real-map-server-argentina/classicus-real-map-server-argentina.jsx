import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-argentina');
}

export default function ClassicusRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-argentina" />;
}
