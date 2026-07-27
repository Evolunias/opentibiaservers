import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-sweden');
}

export default function MiracleBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-sweden" />;
}
