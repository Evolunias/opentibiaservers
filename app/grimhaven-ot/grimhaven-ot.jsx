import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('grimhaven-ot');
}

export default function GrimhavenOtPage() {
  return <StaticExactMatchPage slug="grimhaven-ot" />;
}
