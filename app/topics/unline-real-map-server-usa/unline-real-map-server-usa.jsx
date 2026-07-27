import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-usa');
}

export default function UnlineRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-usa" />;
}
