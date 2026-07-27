import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('grimhaven');
}

export default function GrimhavenPage() {
  return <StaticExactMatchPage slug="grimhaven" />;
}
