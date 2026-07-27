import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-custom-map-servers');
}

export default function Otmadness100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-custom-map-servers" />;
}
