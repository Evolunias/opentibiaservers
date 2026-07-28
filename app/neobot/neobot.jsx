import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('neobot');
}

export default function NeobotPage() {
  return <StaticExactMatchPage slug="neobot" />;
}
