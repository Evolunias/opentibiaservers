import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-custom-map-server');
}

export default function Otmadness71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-custom-map-server" />;
}
