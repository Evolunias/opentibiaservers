import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibiabase');
}

export default function TibiabasePage() {
  return <StaticExactMatchPage slug="tibiabase" />;
}
