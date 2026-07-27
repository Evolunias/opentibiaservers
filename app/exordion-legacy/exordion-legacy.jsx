import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('exordion-legacy');
}

export default function ExordionLegacyPage() {
  return <StaticExactMatchPage slug="exordion-legacy" />;
}
