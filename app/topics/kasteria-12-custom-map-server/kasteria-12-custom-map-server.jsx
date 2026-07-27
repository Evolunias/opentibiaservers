import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-custom-map-server');
}

export default function Kasteria12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-custom-map-server" />;
}
