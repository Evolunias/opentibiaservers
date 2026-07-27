import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-6-real-map-server');
}

export default function Otmadness86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-6-real-map-server" />;
}
