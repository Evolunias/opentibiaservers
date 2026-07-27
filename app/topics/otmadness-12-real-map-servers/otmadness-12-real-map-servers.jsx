import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-real-map-servers');
}

export default function Otmadness12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-real-map-servers" />;
}
