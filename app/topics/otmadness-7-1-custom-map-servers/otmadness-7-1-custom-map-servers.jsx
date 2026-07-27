import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-custom-map-servers');
}

export default function Otmadness71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-custom-map-servers" />;
}
