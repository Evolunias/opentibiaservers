import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-mexico');
}

export default function PvpRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-mexico" />;
}
