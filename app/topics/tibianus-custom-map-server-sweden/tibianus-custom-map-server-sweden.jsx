import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-sweden');
}

export default function TibianusCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-sweden" />;
}
