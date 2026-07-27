import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('symikot');
}

export default function SymikotPage() {
  return <StaticExactMatchPage slug="symikot" />;
}
