import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibiafun');
}

export default function TibiafunPage() {
  return <StaticExactMatchPage slug="tibiafun" />;
}
