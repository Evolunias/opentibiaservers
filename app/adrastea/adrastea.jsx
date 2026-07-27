import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('adrastea');
}

export default function AdrasteaPage() {
  return <StaticExactMatchPage slug="adrastea" />;
}
