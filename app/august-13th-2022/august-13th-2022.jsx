import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('august-13th-2022');
}

export default function August13th2022Page() {
  return <StaticExactMatchPage slug="august-13th-2022" />;
}
