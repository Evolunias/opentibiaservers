import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-custom-map-servers');
}

export default function Otmadness14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-custom-map-servers" />;
}
