import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-sweden');
}

export default function NostaltherBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-sweden" />;
}
