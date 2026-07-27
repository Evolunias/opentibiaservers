import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('mysteria');
}

export default function MysteriaPage() {
  return <StaticExactMatchPage slug="mysteria" />;
}
