import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-servers-europe');
}

export default function AureraGlobalRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-servers-europe" />;
}
