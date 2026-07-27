import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-poland');
}

export default function EmpirebrCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-poland" />;
}
