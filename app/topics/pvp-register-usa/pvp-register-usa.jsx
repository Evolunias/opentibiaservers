import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-usa');
}

export default function PvpRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-usa" />;
}
