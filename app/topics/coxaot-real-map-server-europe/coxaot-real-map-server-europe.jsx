import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-server-europe');
}

export default function CoxaotRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-server-europe" />;
}
