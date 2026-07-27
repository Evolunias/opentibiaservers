import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-real-map-servers');
}

export default function Arcaniarl15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-real-map-servers" />;
}
