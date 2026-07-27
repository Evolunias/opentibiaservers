import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-usa');
}

export default function CoxaotCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-usa" />;
}
