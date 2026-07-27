import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-real-map-servers');
}

export default function Arcaniarl13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-real-map-servers" />;
}
