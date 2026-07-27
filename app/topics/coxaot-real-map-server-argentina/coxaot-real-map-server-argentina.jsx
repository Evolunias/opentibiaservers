import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-server-argentina');
}

export default function CoxaotRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-server-argentina" />;
}
