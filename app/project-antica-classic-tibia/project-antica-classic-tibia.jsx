import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('project-antica-classic-tibia');
}

export default function ProjectAnticaClassicTibiaPage() {
  return <StaticExactMatchPage slug="project-antica-classic-tibia" />;
}
