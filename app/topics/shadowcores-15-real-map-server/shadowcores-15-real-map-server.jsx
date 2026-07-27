import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-real-map-server');
}

export default function Shadowcores15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-real-map-server" />;
}
