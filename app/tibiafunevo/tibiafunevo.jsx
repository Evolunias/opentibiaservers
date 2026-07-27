import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibiafunevo');
}

export default function TibiafunevoPage() {
  return <StaticExactMatchPage slug="tibiafunevo" />;
}
