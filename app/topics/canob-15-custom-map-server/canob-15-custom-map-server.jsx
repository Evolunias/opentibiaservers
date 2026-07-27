import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-custom-map-server');
}

export default function Canob15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-custom-map-server" />;
}
