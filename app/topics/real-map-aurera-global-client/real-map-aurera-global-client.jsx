import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-client');
}

export default function RealMapAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-client" />;
}
