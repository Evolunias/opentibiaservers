import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-brazil');
}

export default function CoxaotCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-brazil" />;
}
