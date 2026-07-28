import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('razorot-16-01-custom-server');
}

export default function Razorot1601CustomServerPage() {
  return <StaticExactMatchPage slug="razorot-16-01-custom-server" />;
}
