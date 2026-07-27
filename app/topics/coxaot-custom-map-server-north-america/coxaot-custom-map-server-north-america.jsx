import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-north-america');
}

export default function CoxaotCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-north-america" />;
}
