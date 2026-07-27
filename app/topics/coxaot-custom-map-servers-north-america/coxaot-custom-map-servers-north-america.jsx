import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-north-america');
}

export default function CoxaotCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-north-america" />;
}
