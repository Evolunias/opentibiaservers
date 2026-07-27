import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('classick-drakoria-starts-friday-17th');
}

export default function ClassickDrakoriaStartsFriday17thPage() {
  return <StaticExactMatchPage slug="classick-drakoria-starts-friday-17th" />;
}
