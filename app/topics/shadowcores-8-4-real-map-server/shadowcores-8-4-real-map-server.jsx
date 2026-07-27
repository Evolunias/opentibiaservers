import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-real-map-server');
}

export default function Shadowcores84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-real-map-server" />;
}
