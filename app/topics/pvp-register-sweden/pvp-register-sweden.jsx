import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-sweden');
}

export default function PvpRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-sweden" />;
}
