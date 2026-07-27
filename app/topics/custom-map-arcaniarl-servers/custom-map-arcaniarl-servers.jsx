import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-arcaniarl-servers');
}

export default function CustomMapArcaniarlServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-arcaniarl-servers" />;
}
