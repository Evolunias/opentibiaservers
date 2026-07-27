import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-real-map-server');
}

export default function Arcaniarl100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-real-map-server" />;
}
