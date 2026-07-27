import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-brazil');
}

export default function PvpRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-brazil" />;
}
