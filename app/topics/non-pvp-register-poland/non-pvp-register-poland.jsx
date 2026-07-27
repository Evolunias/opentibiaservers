import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-poland');
}

export default function NonPvpRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-poland" />;
}
