import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-real-map-server');
}

export default function Shadowcores96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-real-map-server" />;
}
