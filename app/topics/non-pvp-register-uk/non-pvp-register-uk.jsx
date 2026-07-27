import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-uk');
}

export default function NonPvpRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-uk" />;
}
