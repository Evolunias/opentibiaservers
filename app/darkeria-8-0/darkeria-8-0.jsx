import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('darkeria-8-0');
}

export default function Darkeria80Page() {
  return <StaticExactMatchPage slug="darkeria-8-0" />;
}
