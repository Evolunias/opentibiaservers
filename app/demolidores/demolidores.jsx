import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('demolidores');
}

export default function DemolidoresPage() {
  return <StaticExactMatchPage slug="demolidores" />;
}
