import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-real-map-servers');
}

export default function Otmadness100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-real-map-servers" />;
}
