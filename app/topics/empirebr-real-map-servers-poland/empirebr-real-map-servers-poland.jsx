import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-servers-poland');
}

export default function EmpirebrRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-servers-poland" />;
}
