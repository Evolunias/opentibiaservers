import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-mexico');
}

export default function CoxaotCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-mexico" />;
}
