import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-real-map-server');
}

export default function Unline11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-real-map-server" />;
}
