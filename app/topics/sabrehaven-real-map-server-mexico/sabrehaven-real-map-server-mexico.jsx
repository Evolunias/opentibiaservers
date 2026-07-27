import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-mexico');
}

export default function SabrehavenRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-mexico" />;
}
