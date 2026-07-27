import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-real-map-servers');
}

export default function Otmadness11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-real-map-servers" />;
}
