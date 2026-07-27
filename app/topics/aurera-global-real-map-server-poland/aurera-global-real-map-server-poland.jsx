import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-poland');
}

export default function AureraGlobalRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-poland" />;
}
