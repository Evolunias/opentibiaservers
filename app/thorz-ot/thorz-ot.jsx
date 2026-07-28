import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('thorz-ot');
}

export default function ThorzOtPage() {
  return <StaticExactMatchPage slug="thorz-ot" />;
}
