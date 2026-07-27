import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-argentina');
}

export default function SabrehavenRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-argentina" />;
}
