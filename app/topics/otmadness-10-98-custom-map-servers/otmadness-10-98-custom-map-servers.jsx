import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-98-custom-map-servers');
}

export default function Otmadness1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-98-custom-map-servers" />;
}
