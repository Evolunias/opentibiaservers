import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-canada');
}

export default function CoxaotCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-canada" />;
}
