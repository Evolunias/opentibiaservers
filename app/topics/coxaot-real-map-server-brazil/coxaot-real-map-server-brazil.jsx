import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-server-brazil');
}

export default function CoxaotRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-server-brazil" />;
}
