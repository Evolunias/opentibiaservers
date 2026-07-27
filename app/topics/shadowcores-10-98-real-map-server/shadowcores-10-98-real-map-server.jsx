import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-98-real-map-server');
}

export default function Shadowcores1098RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-98-real-map-server" />;
}
