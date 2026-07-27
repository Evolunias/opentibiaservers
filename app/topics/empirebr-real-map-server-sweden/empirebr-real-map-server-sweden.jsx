import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-sweden');
}

export default function EmpirebrRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-sweden" />;
}
