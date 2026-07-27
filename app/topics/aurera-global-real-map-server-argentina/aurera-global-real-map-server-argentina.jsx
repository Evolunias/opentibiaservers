import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-argentina');
}

export default function AureraGlobalRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-argentina" />;
}
