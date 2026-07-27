import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-real-map-server');
}

export default function AureraGlobal12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-real-map-server" />;
}
