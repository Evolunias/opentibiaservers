import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-brazil');
}

export default function CoxaotCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-brazil" />;
}
