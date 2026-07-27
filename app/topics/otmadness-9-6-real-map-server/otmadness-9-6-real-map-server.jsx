import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-real-map-server');
}

export default function Otmadness96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-real-map-server" />;
}
