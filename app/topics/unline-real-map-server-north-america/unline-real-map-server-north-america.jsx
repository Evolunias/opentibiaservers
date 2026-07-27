import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-north-america');
}

export default function UnlineRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-north-america" />;
}
