import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-brazil');
}

export default function NonPvpRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-brazil" />;
}
