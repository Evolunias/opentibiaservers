import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-servers-usa');
}

export default function CoxaotRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-servers-usa" />;
}
