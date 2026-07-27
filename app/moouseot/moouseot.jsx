import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('moouseot');
}

export default function MoouseotPage() {
  return <StaticExactMatchPage slug="moouseot" />;
}
