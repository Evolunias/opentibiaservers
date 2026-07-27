import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-germany');
}

export default function AureraGlobalRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-germany" />;
}
