import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-custom-map-servers');
}

export default function Otmadness12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-custom-map-servers" />;
}
