import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('mithycal-global');
}

export default function MithycalGlobalPage() {
  return <StaticExactMatchPage slug="mithycal-global" />;
}
