import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-germany');
}

export default function NonPvpRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-germany" />;
}
