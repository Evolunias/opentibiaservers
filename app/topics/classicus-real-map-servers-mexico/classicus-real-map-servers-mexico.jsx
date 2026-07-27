import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-mexico');
}

export default function ClassicusRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-mexico" />;
}
