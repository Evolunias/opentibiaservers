import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('dawn-port');
}

export default function DawnPortPage() {
  return <StaticExactMatchPage slug="dawn-port" />;
}
