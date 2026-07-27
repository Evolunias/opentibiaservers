import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('deathzot');
}

export default function DeathzotPage() {
  return <StaticExactMatchPage slug="deathzot" />;
}
