import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-custom-map-servers');
}

export default function Otmadness13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-custom-map-servers" />;
}
