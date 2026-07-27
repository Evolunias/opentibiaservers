import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-canada');
}

export default function PvpRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-canada" />;
}
