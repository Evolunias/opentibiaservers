import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-servers-argentina');
}

export default function CoxaotRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-servers-argentina" />;
}
