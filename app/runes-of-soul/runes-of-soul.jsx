import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('runes-of-soul');
}

export default function RunesOfSoulPage() {
  return <StaticExactMatchPage slug="runes-of-soul" />;
}
