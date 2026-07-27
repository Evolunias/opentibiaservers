import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-custom-map-servers');
}

export default function Otmadness76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-custom-map-servers" />;
}
