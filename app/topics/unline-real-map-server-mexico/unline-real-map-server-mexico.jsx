import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-mexico');
}

export default function UnlineRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-mexico" />;
}
