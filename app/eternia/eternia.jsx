import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('eternia');
}

export default function EterniaPage() {
  return <StaticExactMatchPage slug="eternia" />;
}
