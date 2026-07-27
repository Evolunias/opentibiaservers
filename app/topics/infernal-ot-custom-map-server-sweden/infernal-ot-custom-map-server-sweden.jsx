import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-sweden');
}

export default function InfernalOtCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-sweden" />;
}
