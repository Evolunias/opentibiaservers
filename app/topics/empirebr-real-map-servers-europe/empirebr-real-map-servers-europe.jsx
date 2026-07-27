import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-servers-europe');
}

export default function EmpirebrRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-servers-europe" />;
}
