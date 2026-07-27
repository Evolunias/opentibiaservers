import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-server-north-america');
}

export default function RealestaRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-server-north-america" />;
}
