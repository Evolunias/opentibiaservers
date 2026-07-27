import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-real-map-servers');
}

export default function Otmadness84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-real-map-servers" />;
}
