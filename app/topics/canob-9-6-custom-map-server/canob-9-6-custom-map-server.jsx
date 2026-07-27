import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-custom-map-server');
}

export default function Canob96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-custom-map-server" />;
}
