import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tnt-server');
}

export default function TntServerPage() {
  return <StaticExactMatchPage slug="tnt-server" />;
}
