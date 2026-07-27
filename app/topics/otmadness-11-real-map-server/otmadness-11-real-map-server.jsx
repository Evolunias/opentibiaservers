import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-real-map-server');
}

export default function Otmadness11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-real-map-server" />;
}
