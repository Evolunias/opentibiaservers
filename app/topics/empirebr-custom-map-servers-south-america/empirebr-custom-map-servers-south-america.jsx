import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-south-america');
}

export default function EmpirebrCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-south-america" />;
}
