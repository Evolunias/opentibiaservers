import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-argentina');
}

export default function CoxaotCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-argentina" />;
}
