import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('furia');
}

export default function FuriaPage() {
  return <StaticExactMatchPage slug="furia" />;
}
