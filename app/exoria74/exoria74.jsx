import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('exoria74');
}

export default function Exoria74Page() {
  return <StaticExactMatchPage slug="exoria74" />;
}
