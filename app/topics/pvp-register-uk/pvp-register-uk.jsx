import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-uk');
}

export default function PvpRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-uk" />;
}
