import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-usa');
}

export default function EmpirebrRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-usa" />;
}
