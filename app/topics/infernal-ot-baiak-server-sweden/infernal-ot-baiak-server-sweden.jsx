import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-baiak-server-sweden');
}

export default function InfernalOtBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-baiak-server-sweden" />;
}
