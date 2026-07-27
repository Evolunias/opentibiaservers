import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-1-real-map-servers');
}

export default function Otmadness81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-1-real-map-servers" />;
}
