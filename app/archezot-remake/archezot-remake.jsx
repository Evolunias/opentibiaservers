import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('archezot-remake');
}

export default function ArchezotRemakePage() {
  return <StaticExactMatchPage slug="archezot-remake" />;
}
