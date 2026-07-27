import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-latin-america');
}

export default function PvpRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-latin-america" />;
}
