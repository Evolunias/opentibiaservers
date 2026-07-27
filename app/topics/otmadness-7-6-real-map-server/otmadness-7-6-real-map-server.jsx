import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-real-map-server');
}

export default function Otmadness76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-real-map-server" />;
}
