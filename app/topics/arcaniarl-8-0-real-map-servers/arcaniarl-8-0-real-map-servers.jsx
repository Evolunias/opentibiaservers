import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-real-map-servers');
}

export default function Arcaniarl80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-real-map-servers" />;
}
