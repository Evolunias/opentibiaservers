import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-servers-north-america');
}

export default function UnlineRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-servers-north-america" />;
}
