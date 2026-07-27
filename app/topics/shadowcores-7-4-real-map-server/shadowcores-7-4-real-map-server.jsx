import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-real-map-server');
}

export default function Shadowcores74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-real-map-server" />;
}
