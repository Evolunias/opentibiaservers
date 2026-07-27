import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-real-map-server');
}

export default function AureraGlobal15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-real-map-server" />;
}
