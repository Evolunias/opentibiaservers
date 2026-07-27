import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('aiolosot');
}

export default function AiolosotPage() {
  return <StaticExactMatchPage slug="aiolosot" />;
}
