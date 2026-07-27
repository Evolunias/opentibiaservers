import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('bravora-exordion');
}

export default function BravoraExordionPage() {
  return <StaticExactMatchPage slug="bravora-exordion" />;
}
