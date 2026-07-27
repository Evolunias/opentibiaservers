import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-1-real-map-server');
}

export default function Shadowcores81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-1-real-map-server" />;
}
