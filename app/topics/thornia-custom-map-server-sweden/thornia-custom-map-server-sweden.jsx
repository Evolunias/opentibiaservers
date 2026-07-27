import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-sweden');
}

export default function ThorniaCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-sweden" />;
}
