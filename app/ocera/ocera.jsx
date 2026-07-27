import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ocera');
}

export default function OceraPage() {
  return <StaticExactMatchPage slug="ocera" />;
}
