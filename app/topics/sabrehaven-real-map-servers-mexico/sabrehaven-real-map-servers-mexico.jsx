import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-mexico');
}

export default function SabrehavenRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-mexico" />;
}
