import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('nebula');
}

export default function NebulaPage() {
  return <StaticExactMatchPage slug="nebula" />;
}
