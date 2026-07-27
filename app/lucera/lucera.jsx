import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('lucera');
}

export default function LuceraPage() {
  return <StaticExactMatchPage slug="lucera" />;
}
