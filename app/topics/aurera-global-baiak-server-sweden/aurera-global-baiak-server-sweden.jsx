import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-baiak-server-sweden');
}

export default function AureraGlobalBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-baiak-server-sweden" />;
}
