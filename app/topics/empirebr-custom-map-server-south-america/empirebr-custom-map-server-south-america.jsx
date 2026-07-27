import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-south-america');
}

export default function EmpirebrCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-south-america" />;
}
