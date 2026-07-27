import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-mexico');
}

export default function NonPvpRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-mexico" />;
}
