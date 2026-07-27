import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-custom-map-server');
}

export default function Otmadness74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-custom-map-server" />;
}
