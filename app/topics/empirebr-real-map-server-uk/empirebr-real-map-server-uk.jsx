import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-uk');
}

export default function EmpirebrRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-uk" />;
}
