import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('nightmare-server');
}

export default function NightmareServerPage() {
  return <StaticExactMatchPage slug="nightmare-server" />;
}
