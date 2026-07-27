import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-custom-map-server');
}

export default function Canob71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-custom-map-server" />;
}
