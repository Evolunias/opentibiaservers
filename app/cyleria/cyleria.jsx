import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('cyleria');
}

export default function CyleriaPage() {
  return <StaticExactMatchPage slug="cyleria" />;
}
