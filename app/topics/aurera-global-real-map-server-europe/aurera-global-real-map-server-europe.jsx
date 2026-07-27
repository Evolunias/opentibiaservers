import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-europe');
}

export default function AureraGlobalRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-europe" />;
}
