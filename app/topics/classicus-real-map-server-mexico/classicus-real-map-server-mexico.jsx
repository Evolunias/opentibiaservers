import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-mexico');
}

export default function ClassicusRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-mexico" />;
}
