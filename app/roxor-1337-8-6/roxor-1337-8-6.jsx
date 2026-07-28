import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('roxor-1337-8-6');
}

export default function Roxor133786Page() {
  return <StaticExactMatchPage slug="roxor-1337-8-6" />;
}
