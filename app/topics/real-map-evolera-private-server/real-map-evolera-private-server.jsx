import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-private-server');
}

export default function RealMapEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-private-server" />;
}
