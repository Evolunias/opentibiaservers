import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-sweden');
}

export default function EmpirebrCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-sweden" />;
}
