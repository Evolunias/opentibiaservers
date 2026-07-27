import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-uk');
}

export default function CoxaotCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-uk" />;
}
