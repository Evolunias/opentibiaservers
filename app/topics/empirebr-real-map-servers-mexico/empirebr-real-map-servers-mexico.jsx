import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-servers-mexico');
}

export default function EmpirebrRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-servers-mexico" />;
}
