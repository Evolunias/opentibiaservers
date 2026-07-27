import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-real-map-server');
}

export default function Canob100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-real-map-server" />;
}
