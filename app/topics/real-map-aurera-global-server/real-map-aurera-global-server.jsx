import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-server');
}

export default function RealMapAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-server" />;
}
