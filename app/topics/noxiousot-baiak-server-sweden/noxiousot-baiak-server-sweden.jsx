import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-sweden');
}

export default function NoxiousotBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-sweden" />;
}
