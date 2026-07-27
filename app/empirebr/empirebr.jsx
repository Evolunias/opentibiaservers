import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('empirebr');
}

export default function EmpirebrPage() {
  return <StaticExactMatchPage slug="empirebr" />;
}
