import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibiaclassic');
}

export default function TibiaclassicPage() {
  return <StaticExactMatchPage slug="tibiaclassic" />;
}
