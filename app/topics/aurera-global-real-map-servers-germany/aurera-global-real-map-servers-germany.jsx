import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-servers-germany');
}

export default function AureraGlobalRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-servers-germany" />;
}
