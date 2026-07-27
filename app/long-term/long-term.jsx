import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('long-term');
}

export default function LongTermPage() {
  return <StaticExactMatchPage slug="long-term" />;
}
