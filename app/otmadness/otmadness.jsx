import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('otmadness');
}

export default function OtmadnessPage() {
  return <StaticExactMatchPage slug="otmadness" />;
}
