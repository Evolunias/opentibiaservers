import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-0-real-map-servers');
}

export default function Otmadness80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-0-real-map-servers" />;
}
