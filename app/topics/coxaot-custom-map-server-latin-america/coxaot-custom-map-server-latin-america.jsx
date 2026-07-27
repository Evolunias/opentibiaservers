import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-latin-america');
}

export default function CoxaotCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-latin-america" />;
}
