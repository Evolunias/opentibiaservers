import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-north-america');
}

export default function RealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-north-america" />;
}
