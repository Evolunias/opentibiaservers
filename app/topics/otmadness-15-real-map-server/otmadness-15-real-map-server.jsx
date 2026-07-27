import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-real-map-server');
}

export default function Otmadness15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-real-map-server" />;
}
