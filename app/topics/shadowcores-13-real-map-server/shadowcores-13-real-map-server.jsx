import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-real-map-server');
}

export default function Shadowcores13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-real-map-server" />;
}
