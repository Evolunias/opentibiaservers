import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibiabot-ng');
}

export default function TibiabotNgPage() {
  return <StaticExactMatchPage slug="tibiabot-ng" />;
}
