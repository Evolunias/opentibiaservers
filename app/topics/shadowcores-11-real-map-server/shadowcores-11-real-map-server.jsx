import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-real-map-server');
}

export default function Shadowcores11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-real-map-server" />;
}
