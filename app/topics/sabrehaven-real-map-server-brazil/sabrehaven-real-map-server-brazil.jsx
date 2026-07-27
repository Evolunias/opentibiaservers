import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-brazil');
}

export default function SabrehavenRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-brazil" />;
}
