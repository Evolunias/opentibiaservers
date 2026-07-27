import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-1-custom-map-servers');
}

export default function Otmadness81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-1-custom-map-servers" />;
}
