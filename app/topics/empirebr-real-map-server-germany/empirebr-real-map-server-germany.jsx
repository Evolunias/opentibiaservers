import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-germany');
}

export default function EmpirebrRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-germany" />;
}
