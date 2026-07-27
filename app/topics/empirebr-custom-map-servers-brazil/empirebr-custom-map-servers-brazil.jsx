import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-brazil');
}

export default function EmpirebrCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-brazil" />;
}
