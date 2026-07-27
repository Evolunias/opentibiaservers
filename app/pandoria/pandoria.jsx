import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('pandoria');
}

export default function PandoriaPage() {
  return <StaticExactMatchPage slug="pandoria" />;
}
