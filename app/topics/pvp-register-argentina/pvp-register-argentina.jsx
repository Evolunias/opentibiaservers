import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-argentina');
}

export default function PvpRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-argentina" />;
}
