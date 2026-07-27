import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('otland');
}

export default function OtlandPage() {
  return <StaticExactMatchPage slug="otland" />;
}
