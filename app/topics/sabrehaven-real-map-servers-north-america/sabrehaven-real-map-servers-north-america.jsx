import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-north-america');
}

export default function SabrehavenRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-north-america" />;
}
