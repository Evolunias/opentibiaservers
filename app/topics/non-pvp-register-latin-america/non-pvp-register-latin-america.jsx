import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-latin-america');
}

export default function NonPvpRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-latin-america" />;
}
