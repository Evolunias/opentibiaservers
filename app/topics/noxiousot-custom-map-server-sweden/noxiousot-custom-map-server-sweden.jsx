import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-sweden');
}

export default function NoxiousotCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-sweden" />;
}
