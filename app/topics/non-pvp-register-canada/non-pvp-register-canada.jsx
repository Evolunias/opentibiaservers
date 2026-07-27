import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-canada');
}

export default function NonPvpRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-canada" />;
}
