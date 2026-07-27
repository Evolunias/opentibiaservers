import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('alastera');
}

export default function AlasteraPage() {
  return <StaticExactMatchPage slug="alastera" />;
}
