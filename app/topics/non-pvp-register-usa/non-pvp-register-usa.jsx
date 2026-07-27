import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-usa');
}

export default function NonPvpRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-usa" />;
}
