import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-sweden');
}

export default function ImperianicCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-sweden" />;
}
