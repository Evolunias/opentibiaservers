import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('belobra');
}

export default function BelobraPage() {
  return <StaticExactMatchPage slug="belobra" />;
}
