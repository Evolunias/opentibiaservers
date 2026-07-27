import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-custom-map-server');
}

export default function Canob12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-custom-map-server" />;
}
