import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-server-sweden');
}

export default function CoxaotRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-server-sweden" />;
}
