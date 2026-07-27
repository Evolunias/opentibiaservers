import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-servers-usa');
}

export default function UnlineRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-servers-usa" />;
}
