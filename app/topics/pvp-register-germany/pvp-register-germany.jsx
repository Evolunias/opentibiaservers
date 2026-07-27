import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-germany');
}

export default function PvpRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-germany" />;
}
