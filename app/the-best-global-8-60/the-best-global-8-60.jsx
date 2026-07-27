import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('the-best-global-8-60');
}

export default function TheBestGlobal860Page() {
  return <StaticExactMatchPage slug="the-best-global-8-60" />;
}
