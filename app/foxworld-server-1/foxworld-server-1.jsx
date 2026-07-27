import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('foxworld-server-1');
}

export default function FoxworldServer1Page() {
  return <StaticExactMatchPage slug="foxworld-server-1" />;
}
