import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('nostalrius');
}

export default function NostalriusPage() {
  return <StaticExactMatchPage slug="nostalrius" />;
}
