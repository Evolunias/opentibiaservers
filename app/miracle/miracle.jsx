import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('miracle');
}

export default function MiraclePage() {
  return <StaticExactMatchPage slug="miracle" />;
}
