import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-latin-america');
}

export default function CoxaotCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-latin-america" />;
}
