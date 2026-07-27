import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-server-germany');
}

export default function CoxaotRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-server-germany" />;
}
