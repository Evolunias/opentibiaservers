import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-usa');
}

export default function SabrehavenRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-usa" />;
}
