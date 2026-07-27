import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-custom-map-server');
}

export default function Otmadness13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-custom-map-server" />;
}
