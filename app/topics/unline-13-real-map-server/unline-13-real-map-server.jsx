import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-real-map-server');
}

export default function Unline13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-real-map-server" />;
}
