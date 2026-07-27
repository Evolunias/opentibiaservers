import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-servers-europe');
}

export default function CoxaotRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-servers-europe" />;
}
