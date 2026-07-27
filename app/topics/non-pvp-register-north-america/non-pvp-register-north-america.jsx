import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-north-america');
}

export default function NonPvpRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-north-america" />;
}
