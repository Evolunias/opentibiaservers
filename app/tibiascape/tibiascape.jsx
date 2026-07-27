import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibiascape');
}

export default function TibiascapePage() {
  return <StaticExactMatchPage slug="tibiascape" />;
}
