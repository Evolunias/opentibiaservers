import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-real-map-server');
}

export default function Otmadness12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-real-map-server" />;
}
