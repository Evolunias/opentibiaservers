import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('imperia-arcanaot');
}

export default function ImperiaArcanaotPage() {
  return <StaticExactMatchPage slug="imperia-arcanaot" />;
}
