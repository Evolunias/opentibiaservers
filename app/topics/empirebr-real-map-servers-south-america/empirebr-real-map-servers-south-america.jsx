import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-servers-south-america');
}

export default function EmpirebrRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-servers-south-america" />;
}
