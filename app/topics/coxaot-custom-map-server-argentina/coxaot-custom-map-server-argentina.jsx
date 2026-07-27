import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-argentina');
}

export default function CoxaotCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-argentina" />;
}
