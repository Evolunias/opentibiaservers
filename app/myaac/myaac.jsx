import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('myaac');
}

export default function MyaacPage() {
  return <StaticExactMatchPage slug="myaac" />;
}
