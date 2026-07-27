import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-baiak-server-sweden');
}

export default function NtoStarBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-baiak-server-sweden" />;
}
