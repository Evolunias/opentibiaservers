import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-uk');
}

export default function CoxaotCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-uk" />;
}
