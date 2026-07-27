import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-sweden');
}

export default function RealeraCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-sweden" />;
}
