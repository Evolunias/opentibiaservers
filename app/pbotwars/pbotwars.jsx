import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('pbotwars');
}

export default function PbotwarsPage() {
  return <StaticExactMatchPage slug="pbotwars" />;
}
