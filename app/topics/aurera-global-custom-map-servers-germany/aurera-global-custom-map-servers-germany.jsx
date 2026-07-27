import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-servers-germany');
}

export default function AureraGlobalCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-servers-germany" />;
}
