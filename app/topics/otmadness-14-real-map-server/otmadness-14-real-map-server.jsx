import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-real-map-server');
}

export default function Otmadness14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-real-map-server" />;
}
