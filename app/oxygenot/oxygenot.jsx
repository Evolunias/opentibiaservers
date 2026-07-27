import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('oxygenot');
}

export default function OxygenotPage() {
  return <StaticExactMatchPage slug="oxygenot" />;
}
