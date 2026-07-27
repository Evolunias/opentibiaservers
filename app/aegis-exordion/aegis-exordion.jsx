import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('aegis-exordion');
}

export default function AegisExordionPage() {
  return <StaticExactMatchPage slug="aegis-exordion" />;
}
