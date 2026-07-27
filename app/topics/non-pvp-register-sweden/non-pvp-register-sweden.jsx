import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-sweden');
}

export default function NonPvpRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-sweden" />;
}
