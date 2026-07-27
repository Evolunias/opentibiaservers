import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-argentina');
}

export default function SabrehavenRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-argentina" />;
}
