import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-north-america');
}

export default function RealeraRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-north-america" />;
}
