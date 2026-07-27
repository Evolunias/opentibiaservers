import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-servers-canada');
}

export default function EmpirebrRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-servers-canada" />;
}
