import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('samera');
}

export default function SameraPage() {
  return <StaticExactMatchPage slug="samera" />;
}
