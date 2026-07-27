import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-mexico');
}

export default function CoxaotCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-mexico" />;
}
