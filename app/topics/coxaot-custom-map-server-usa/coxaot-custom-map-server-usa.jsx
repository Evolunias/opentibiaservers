import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-usa');
}

export default function CoxaotCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-usa" />;
}
