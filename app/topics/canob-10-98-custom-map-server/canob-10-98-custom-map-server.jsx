import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-98-custom-map-server');
}

export default function Canob1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-98-custom-map-server" />;
}
