import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('exordion');
}

export default function ExordionPage() {
  return <StaticExactMatchPage slug="exordion" />;
}
