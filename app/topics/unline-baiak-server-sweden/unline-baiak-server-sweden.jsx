import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-sweden');
}

export default function UnlineBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-sweden" />;
}
