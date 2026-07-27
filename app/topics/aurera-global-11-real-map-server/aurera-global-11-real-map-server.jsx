import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-real-map-server');
}

export default function AureraGlobal11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-real-map-server" />;
}
