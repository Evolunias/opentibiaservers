import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-server-poland');
}

export default function CoxaotRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-server-poland" />;
}
