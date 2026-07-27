import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-servers-poland');
}

export default function AureraGlobalRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-servers-poland" />;
}
