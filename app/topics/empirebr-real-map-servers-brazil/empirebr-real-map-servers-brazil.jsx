import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-servers-brazil');
}

export default function EmpirebrRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-servers-brazil" />;
}
