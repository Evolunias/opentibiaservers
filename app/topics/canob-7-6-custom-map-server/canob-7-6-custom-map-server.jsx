import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-custom-map-server');
}

export default function Canob76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-custom-map-server" />;
}
