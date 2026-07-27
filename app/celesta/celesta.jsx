import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('celesta');
}

export default function CelestaPage() {
  return <StaticExactMatchPage slug="celesta" />;
}
