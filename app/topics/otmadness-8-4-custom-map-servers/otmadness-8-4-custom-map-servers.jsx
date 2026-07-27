import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-custom-map-servers');
}

export default function Otmadness84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-custom-map-servers" />;
}
