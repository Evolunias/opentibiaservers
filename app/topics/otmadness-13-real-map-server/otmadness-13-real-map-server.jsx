import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-real-map-server');
}

export default function Otmadness13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-real-map-server" />;
}
