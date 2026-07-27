import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-servers');
}

export default function RealMapYurotsServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-servers" />;
}
