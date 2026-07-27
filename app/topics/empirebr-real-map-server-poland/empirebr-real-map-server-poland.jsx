import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-poland');
}

export default function EmpirebrRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-poland" />;
}
