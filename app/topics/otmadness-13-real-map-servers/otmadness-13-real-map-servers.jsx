import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-real-map-servers');
}

export default function Otmadness13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-real-map-servers" />;
}
