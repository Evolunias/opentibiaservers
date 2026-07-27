import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-server-usa');
}

export default function CoxaotRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-server-usa" />;
}
