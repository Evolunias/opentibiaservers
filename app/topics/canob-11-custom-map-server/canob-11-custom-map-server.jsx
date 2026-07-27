import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-custom-map-server');
}

export default function Canob11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-custom-map-server" />;
}
