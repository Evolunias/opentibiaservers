import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-north-america');
}

export default function SabrehavenRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-north-america" />;
}
