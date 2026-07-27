import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('feruots');
}

export default function FeruotsPage() {
  return <StaticExactMatchPage slug="feruots" />;
}
