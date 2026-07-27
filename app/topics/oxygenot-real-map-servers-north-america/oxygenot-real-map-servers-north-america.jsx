import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-servers-north-america');
}

export default function OxygenotRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-servers-north-america" />;
}
