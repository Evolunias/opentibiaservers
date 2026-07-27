import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-canada');
}

export default function EmpirebrRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-canada" />;
}
