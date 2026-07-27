import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-real-map-servers');
}

export default function Otmadness15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-real-map-servers" />;
}
