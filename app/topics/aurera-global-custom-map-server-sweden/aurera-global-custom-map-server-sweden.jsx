import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-server-sweden');
}

export default function AureraGlobalCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-server-sweden" />;
}
