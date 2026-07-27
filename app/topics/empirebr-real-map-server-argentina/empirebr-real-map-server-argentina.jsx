import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-argentina');
}

export default function EmpirebrRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-argentina" />;
}
