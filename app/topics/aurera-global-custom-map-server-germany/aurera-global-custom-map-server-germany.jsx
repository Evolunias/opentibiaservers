import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-server-germany');
}

export default function AureraGlobalCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-server-germany" />;
}
