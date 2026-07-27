import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-uk');
}

export default function AureraGlobalRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-uk" />;
}
