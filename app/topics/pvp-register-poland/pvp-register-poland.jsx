import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-poland');
}

export default function PvpRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-poland" />;
}
