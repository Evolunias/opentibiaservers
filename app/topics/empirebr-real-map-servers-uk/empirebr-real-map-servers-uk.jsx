import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-servers-uk');
}

export default function EmpirebrRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-servers-uk" />;
}
