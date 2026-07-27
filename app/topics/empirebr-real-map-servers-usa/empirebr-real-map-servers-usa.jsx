import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-servers-usa');
}

export default function EmpirebrRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-servers-usa" />;
}
