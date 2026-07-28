import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('free-ot');
}

export default function FreeOtPage() {
  return <StaticExactMatchPage slug="free-ot" />;
}
