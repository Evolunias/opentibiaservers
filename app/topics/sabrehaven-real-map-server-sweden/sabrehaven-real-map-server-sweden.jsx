import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-sweden');
}

export default function SabrehavenRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-sweden" />;
}
