import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-argentina');
}

export default function UnlineRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-argentina" />;
}
