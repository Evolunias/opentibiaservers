import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-custom-map-server');
}

export default function Otmadness100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-custom-map-server" />;
}
