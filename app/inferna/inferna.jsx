import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('inferna');
}

export default function InfernaPage() {
  return <StaticExactMatchPage slug="inferna" />;
}
