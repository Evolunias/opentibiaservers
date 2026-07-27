import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-custom-map-server');
}

export default function Arcaniarl12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-custom-map-server" />;
}
