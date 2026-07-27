import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-north-america');
}

export default function PvpRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-north-america" />;
}
