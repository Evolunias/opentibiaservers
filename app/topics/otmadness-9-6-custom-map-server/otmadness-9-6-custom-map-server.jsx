import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-custom-map-server');
}

export default function Otmadness96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-custom-map-server" />;
}
