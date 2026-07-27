import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-sweden');
}

export default function BaiakRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-sweden" />;
}
