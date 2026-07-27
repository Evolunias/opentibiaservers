import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-server-europe');
}

export default function CoxaotCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-server-europe" />;
}
