import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-custom-map-server');
}

export default function Canob14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-custom-map-server" />;
}
