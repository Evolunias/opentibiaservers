import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-north-america');
}

export default function EmpirebrRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-north-america" />;
}
