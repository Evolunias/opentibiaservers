import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('dolera');
}

export default function DoleraPage() {
  return <StaticExactMatchPage slug="dolera" />;
}
