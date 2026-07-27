import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-server-poland');
}

export default function AureraGlobalCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-server-poland" />;
}
