import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-argentina');
}

export default function NonPvpRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-argentina" />;
}
