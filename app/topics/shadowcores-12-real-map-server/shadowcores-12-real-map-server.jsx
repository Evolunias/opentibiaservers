import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-real-map-server');
}

export default function Shadowcores12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-real-map-server" />;
}
