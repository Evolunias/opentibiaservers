import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-south-america');
}

export default function CoxaotCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-south-america" />;
}
