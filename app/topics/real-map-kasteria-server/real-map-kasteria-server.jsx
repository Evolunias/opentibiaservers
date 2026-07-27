import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-server');
}

export default function RealMapKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-server" />;
}
