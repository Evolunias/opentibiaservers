import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('maskaots-acts-i-ii');
}

export default function MaskaotsActsIIiPage() {
  return <StaticExactMatchPage slug="maskaots-acts-i-ii" />;
}
