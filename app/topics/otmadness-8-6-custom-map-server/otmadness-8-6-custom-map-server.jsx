import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-6-custom-map-server');
}

export default function Otmadness86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-6-custom-map-server" />;
}
