import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('castoria-classic-7-4-experience');
}

export default function CastoriaClassic74ExperiencePage() {
  return <StaticExactMatchPage slug="castoria-classic-7-4-experience" />;
}
