import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-custom-map-server');
}

export default function Otmadness15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-custom-map-server" />;
}
