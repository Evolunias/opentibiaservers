import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-1-custom-map-server');
}

export default function Canob81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-1-custom-map-server" />;
}
