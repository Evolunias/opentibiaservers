import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('fossil-early-alpha');
}

export default function FossilEarlyAlphaPage() {
  return <StaticExactMatchPage slug="fossil-early-alpha" />;
}
