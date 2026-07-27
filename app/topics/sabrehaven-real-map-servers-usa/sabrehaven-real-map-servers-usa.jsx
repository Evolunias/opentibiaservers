import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-usa');
}

export default function SabrehavenRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-usa" />;
}
