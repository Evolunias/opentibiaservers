import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-real-map-servers');
}

export default function Arcaniarl12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-real-map-servers" />;
}
