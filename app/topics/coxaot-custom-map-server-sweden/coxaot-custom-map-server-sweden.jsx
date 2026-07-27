import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-sweden');
}

export default function CoxaotCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-sweden" />;
}
