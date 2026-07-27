import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-real-map-servers');
}

export default function Otmadness14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-real-map-servers" />;
}
