import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-europe');
}

export default function CoxaotCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-europe" />;
}
