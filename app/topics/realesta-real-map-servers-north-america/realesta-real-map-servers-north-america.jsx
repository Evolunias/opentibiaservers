import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-north-america');
}

export default function RealestaRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-north-america" />;
}
