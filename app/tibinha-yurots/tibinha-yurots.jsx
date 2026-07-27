import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibinha-yurots');
}

export default function TibinhaYurotsPage() {
  return <StaticExactMatchPage slug="tibinha-yurots" />;
}
