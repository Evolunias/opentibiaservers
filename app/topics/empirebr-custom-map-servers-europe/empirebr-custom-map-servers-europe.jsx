import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-europe');
}

export default function EmpirebrCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-europe" />;
}
