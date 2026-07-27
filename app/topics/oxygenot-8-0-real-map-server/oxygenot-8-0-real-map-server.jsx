import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-real-map-server');
}

export default function Oxygenot80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-real-map-server" />;
}
