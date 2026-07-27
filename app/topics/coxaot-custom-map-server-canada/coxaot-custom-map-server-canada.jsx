import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-canada');
}

export default function CoxaotCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-canada" />;
}
