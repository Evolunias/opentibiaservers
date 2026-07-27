import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-arcaniarl-server');
}

export default function CustomMapArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-arcaniarl-server" />;
}
