import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-servers-mexico');
}

export default function UnlineRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-servers-mexico" />;
}
