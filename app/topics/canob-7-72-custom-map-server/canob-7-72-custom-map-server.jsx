import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-72-custom-map-server');
}

export default function Canob772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-72-custom-map-server" />;
}
