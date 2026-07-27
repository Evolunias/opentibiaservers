import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-sweden');
}

export default function SabrehavenCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-sweden" />;
}
