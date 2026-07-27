import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-custom-map-server');
}

export default function Otmadness11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-custom-map-server" />;
}
