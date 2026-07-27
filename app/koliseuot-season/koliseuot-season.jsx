import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('koliseuot-season');
}

export default function KoliseuotSeasonPage() {
  return <StaticExactMatchPage slug="koliseuot-season" />;
}
