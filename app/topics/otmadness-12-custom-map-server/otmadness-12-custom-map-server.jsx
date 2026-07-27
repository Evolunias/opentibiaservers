import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-custom-map-server');
}

export default function Otmadness12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-custom-map-server" />;
}
