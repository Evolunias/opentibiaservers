import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-sweden');
}

export default function LumineraCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-sweden" />;
}
