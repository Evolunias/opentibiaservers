import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-north-america');
}

export default function RealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-north-america" />;
}
