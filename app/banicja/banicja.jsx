import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('banicja');
}

export default function BanicjaPage() {
  return <StaticExactMatchPage slug="banicja" />;
}
