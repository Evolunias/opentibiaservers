import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-server-south-america');
}

export default function AureraGlobalCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-server-south-america" />;
}
