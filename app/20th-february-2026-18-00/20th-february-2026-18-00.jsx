import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('20th-february-2026-18-00');
}

export default function Exact20thFebruary20261800Page() {
  return <StaticExactMatchPage slug="20th-february-2026-18-00" />;
}
