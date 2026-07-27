import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-sweden');
}

export default function NilotBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-sweden" />;
}
