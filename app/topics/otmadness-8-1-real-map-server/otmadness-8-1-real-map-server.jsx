import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-1-real-map-server');
}

export default function Otmadness81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-1-real-map-server" />;
}
