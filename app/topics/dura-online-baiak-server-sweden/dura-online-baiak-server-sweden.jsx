import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-sweden');
}

export default function DuraOnlineBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-sweden" />;
}
