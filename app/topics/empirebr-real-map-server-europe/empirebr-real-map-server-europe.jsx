import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-europe');
}

export default function EmpirebrRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-europe" />;
}
